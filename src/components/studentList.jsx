import { useState } from "react";
import Button from "./Button";
import Badge from "./Badge";
import Input from "./Input";
import "./styles/studentList.css";

const StudentList = ({ students, onStatusChange, onDelete }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCourse, setFilterCourse] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All");
    const [sortBy, setSortBy] = useState("name");

    // Get unique courses for filter dropdown
    const courses = ["All", ...new Set(students.map(s => s.course))];

    // Filter and Sort logic
    const filteredStudents = students.filter(std => {
        const matchesSearch = std.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCourse = filterCourse === "All" || std.course === filterCourse;
        const matchesStatus = filterStatus === "All" ||
            (filterStatus === "Present" && std.isPresent) ||
            (filterStatus === "Absent" && !std.isPresent);

        return matchesSearch && matchesCourse && matchesStatus;
    }).sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "grade") return b.grade - a.grade;
        return 0;
    });

    // Get initials for avatar
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    // Grade color class
    const gradeClass = (grade) => {
        if (grade >= 90) return 'grade-high';
        if (grade >= 75) return 'grade-mid';
        return 'grade-low';
    };

    return (
        <div className="student-list-container">
            {/* Toolbar */}
            <div className="toolbar">
                <div className="toolbar-group">
                    <Input
                        label="Search Students"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="toolbar-group">
                    <label className="input-label">Filter by Course</label>
                    <select
                        className="toolbar-select"
                        value={filterCourse}
                        onChange={(e) => setFilterCourse(e.target.value)}
                    >
                        {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="toolbar-group">
                    <label className="input-label">Filter by Status</label>
                    <select
                        className="toolbar-select"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                    </select>
                </div>
                <div className="toolbar-group">
                    <label className="input-label">Sort By</label>
                    <select
                        className="toolbar-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="name">Name (A-Z)</option>
                        <option value="grade">Grade (High-Low)</option>
                    </select>
                </div>
            </div>

            {/* Summary */}
            <div className="list-summary">
                <span className="list-summary-text">
                    Showing <span>{filteredStudents.length}</span> of <span>{students.length}</span> students
                </span>
            </div>

            {filteredStudents.length === 0 ? (
                <div className="empty-state">
                    <span className="empty-icon">🔍</span>
                    <h3>No students found</h3>
                    <p>Try adjusting your search or filters.</p>
                </div>
            ) : (
                <div className="student-grid">
                    {filteredStudents.map((std) => (
                        <div
                            key={std.id}
                            className={`student-card ${std.grade >= 90 ? 'top-performer' : ''}`}
                        >
                            {std.grade >= 90 && <div className="top-performer-badge">⭐ Star</div>}

                            {/* Card Header */}
                            <div className="student-header">
                                <div className="student-avatar">
                                    {getInitials(std.name)}
                                </div>
                                <div className="student-name-block">
                                    <h3>{std.name}</h3>
                                    <span className="student-id">ID #{std.id}</span>
                                </div>
                            </div>

                            {/* Meta grid */}
                            <div className="student-meta">
                                <div className="meta-item">
                                    <span className="meta-label">Course</span>
                                    <span className="meta-value">{std.course}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Age</span>
                                    <span className="meta-value">{std.age}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Grade</span>
                                    <span className={`meta-value ${gradeClass(std.grade)}`}>
                                        {std.grade}%
                                    </span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Status</span>
                                    <span className="meta-value">
                                        <Badge type={std.isPresent ? "success" : "danger"}>
                                            {std.isPresent ? "Present" : "Absent"}
                                        </Badge>
                                    </span>
                                </div>
                            </div>

                            {/* Extra badges */}
                            {std.grade >= 90 && (
                                <div className="badge-row">
                                    <Badge type="warning">Top Performer</Badge>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="card-actions">
                                <Button
                                    variant="outline"
                                    onClick={() => onStatusChange(std.id)}
                                >
                                    Toggle Status
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => onDelete(std.id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudentList;