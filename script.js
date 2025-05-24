document.addEventListener('DOMContentLoaded', function() {
    // SGPA Calculator
    const sgpaCourses = document.getElementById('sgpaCourses');
    const addCourseBtn = document.getElementById('addCourse');
    const calculateSGPABtn = document.getElementById('calculateSGPA');
    const sgpaResult = document.getElementById('sgpaResult');
    
    // CGPA Calculator
    const semesterResults = document.getElementById('semesterResults');
    const addSemesterBtn = document.getElementById('addSemester');
    const calculateCGPABtn = document.getElementById('calculateCGPA');
    const cgpaResult = document.getElementById('cgpaResult');

    // Function to add a new course row
    function addCourseRow() {
        const newRow = document.createElement('div');
        newRow.className = 'course-row grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end';
        newRow.innerHTML = `
            <div class="md:col-span-5">
                <label class="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Data Structures">
            </div>
            <div class="grid grid-cols-2 gap-4 md:col-span-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                    <input type="number" min="1" max="5" class="credits w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value="4">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                    <select class="grade grade-select w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="10">S (10)</option>
                        <option value="9">A (9)</option>
                        <option value="8">B (8)</option>
                        <option value="7">C (7)</option>
                        <option value="6">D (6)</option>
                        <option value="5">E (5)</option>
                        <option value="0">F (0)</option>
                    </select>
                </div>
            </div>
            <div class="md:col-span-1 flex justify-end md:justify-center">
                <button class="remove-course bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors w-full sm:w-auto mt-2 md:mt-0">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        sgpaCourses.appendChild(newRow);
        
        // Add event listener to the new remove button
        newRow.querySelector('.remove-course').addEventListener('click', function() {
            // Only remove if there's more than one row remaining
            if (sgpaCourses.children.length > 1) {
                sgpaCourses.removeChild(newRow);
            } else {
                alert("You need at least one course to calculate SGPA!");
            }
        });
    }

    // Function to add a new semester row
    function addSemesterRow() {
        const newRow = document.createElement('div');
        newRow.className = 'semester-row grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end';
        newRow.innerHTML = `
            <div class="grid grid-cols-2 gap-4 md:col-span-10">
                <div class="col-span-2 sm:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                    <select class="semester-select w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                    </select>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">SGPA</label>
                    <input type="number" step="0.01" min="0" max="10" class="sgpa w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 8.5">
                </div>
            </div>
            <div class="md:col-span-2 flex justify-end md:justify-center">
                <button class="remove-semester bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors w-full sm:w-auto mt-2 md:mt-0">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        semesterResults.appendChild(newRow);
        
        // Add event listener to the new remove button
        newRow.querySelector('.remove-semester').addEventListener('click', function() {
            // Only remove if there's more than one row remaining
            if (semesterResults.children.length > 1) {
                semesterResults.removeChild(newRow);
            } else {
                alert("You need at least one semester to calculate CGPA!");
            }
        });
    }

    // Add event listeners for adding new rows
    addCourseBtn.addEventListener('click', addCourseRow);
    addSemesterBtn.addEventListener('click', addSemesterRow);
    
    // Calculate SGPA
    calculateSGPABtn.addEventListener('click', function() {
        const courseRows = sgpaCourses.querySelectorAll('.course-row');
        let totalCredits = 0;
        let totalGradePoints = 0;
        
        courseRows.forEach(row => {
            const creditsInput = row.querySelector('.credits');
            const gradeSelect = row.querySelector('.grade');

            // Validate inputs
            if (!creditsInput || !gradeSelect) return; // Skip if elements are missing

            const credits = parseFloat(creditsInput.value);
            const grade = parseFloat(gradeSelect.value);

            if (isNaN(credits) || isNaN(grade) || credits <= 0) {
                alert("Please enter valid positive numbers for credits and select a grade for all courses.");
                totalCredits = 0; // Reset to avoid partial calculation
                totalGradePoints = 0; // Reset
                return; // Exit the function
            }
            
            totalCredits += credits;
            totalGradePoints += credits * grade;
        });

        // Only calculate if totalCredits > 0
        if (totalCredits > 0) {
            const sgpa = totalGradePoints / totalCredits;
            document.getElementById('totalCredits').textContent = totalCredits;
            document.getElementById('totalGradePoints').textContent = totalGradePoints.toFixed(2);
            document.getElementById('sgpaValue').textContent = sgpa.toFixed(2);
            sgpaResult.classList.remove('hidden');
        } else {
            alert("Please add at least one valid course to calculate SGPA.");
            sgpaResult.classList.add('hidden'); // Hide results if no valid data
        }
    });
    
    // Calculate CGPA
    calculateCGPABtn.addEventListener('click', function() {
        const semesterRows = semesterResults.querySelectorAll('.semester-row');
        let totalSemesters = 0;
        let totalSGPA = 0;
        
        semesterRows.forEach(row => {
            const sgpaInput = row.querySelector('.sgpa');
            
            // Validate input
            if (!sgpaInput) return; // Skip if element is missing

            const sgpa = parseFloat(sgpaInput.value);
            if (isNaN(sgpa) || sgpa < 0 || sgpa > 10) {
                alert("Please enter a valid SGPA (0-10) for all semesters.");
                totalSemesters = 0; // Reset
                totalSGPA = 0; // Reset
                return; // Exit the function
            }

            totalSemesters++;
            totalSGPA += sgpa;
        });
        
        // Only calculate if totalSemesters > 0
        if (totalSemesters > 0) {
            const cgpa = totalSGPA / totalSemesters;
            document.getElementById('totalSemesters').textContent = totalSemesters;
            document.getElementById('totalSGPA').textContent = totalSGPA.toFixed(2);
            document.getElementById('cgpaValue').textContent = cgpa.toFixed(2);
            cgpaResult.classList.remove('hidden');
        } else {
            alert("Please add at least one valid semester to calculate CGPA.");
            cgpaResult.classList.add('hidden'); // Hide results if no valid data
        }
    });
    
    // Manually add the first row on load to ensure it has a delete button
    // and behaves consistently with subsequently added rows.
    addCourseRow();
    addSemesterRow();
});