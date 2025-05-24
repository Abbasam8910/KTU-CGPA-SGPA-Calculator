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
    
    // Add new course row
    addCourseBtn.addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.className = 'course-row grid grid-cols-12 gap-4 mb-4 items-end';
        newRow.innerHTML = `
            <div class="col-span-5">
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Data Structures">
            </div>
            <div class="col-span-3">
                <input type="number" min="1" max="5" class="credits w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" value="4">
            </div>
            <div class="col-span-3">
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
            <div class="col-span-1 flex justify-end">
                <button class="remove-course bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        sgpaCourses.appendChild(newRow);
        
        // Add event listener to the new remove button
        newRow.querySelector('.remove-course').addEventListener('click', function() {
            sgpaCourses.removeChild(newRow);
        });
    });
    
    // Calculate SGPA
    calculateSGPABtn.addEventListener('click', function() {
        const courseRows = sgpaCourses.querySelectorAll('.course-row');
        let totalCredits = 0;
        let totalGradePoints = 0;
        
        courseRows.forEach(row => {
            const credits = parseFloat(row.querySelector('.credits').value);
            const grade = parseFloat(row.querySelector('.grade').value);
            
            totalCredits += credits;
            totalGradePoints += credits * grade;
        });
        
        const sgpa = totalGradePoints / totalCredits;
        
        document.getElementById('totalCredits').textContent = totalCredits;
        document.getElementById('totalGradePoints').textContent = totalGradePoints.toFixed(2);
        document.getElementById('sgpaValue').textContent = sgpa.toFixed(2);
        
        sgpaResult.classList.remove('hidden');
    });
    
    // Add new semester row
    addSemesterBtn.addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.className = 'semester-row grid grid-cols-12 gap-4 mb-4 items-end';
        newRow.innerHTML = `
            <div class="col-span-6">
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
            <div class="col-span-4">
                <input type="number" step="0.01" min="0" max="10" class="sgpa w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 8.5">
            </div>
            <div class="col-span-2 flex justify-end">
                <button class="remove-semester bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        semesterResults.appendChild(newRow);
        
        // Add event listener to the new remove button
        newRow.querySelector('.remove-semester').addEventListener('click', function() {
            semesterResults.removeChild(newRow);
        });
    });
    
    // Calculate CGPA
    calculateCGPABtn.addEventListener('click', function() {
        const semesterRows = semesterResults.querySelectorAll('.semester-row');
        let totalSemesters = 0;
        let totalSGPA = 0;
        
        semesterRows.forEach(row => {
            const sgpa = parseFloat(row.querySelector('.sgpa').value);
            if (!isNaN(sgpa)) {
                totalSemesters++;
                totalSGPA += sgpa;
            }
        });
        
        const cgpa = totalSGPA / totalSemesters;
        
        document.getElementById('totalSemesters').textContent = totalSemesters;
        document.getElementById('totalSGPA').textContent = totalSGPA.toFixed(2);
        document.getElementById('cgpaValue').textContent = cgpa.toFixed(2);
        
        cgpaResult.classList.remove('hidden');
    });
    
    // Initialize with one course and one semester
    addCourseBtn.click();
    addSemesterBtn.click();
});