# KTU CGPA & SGPA Calculator

A simple web application to calculate SGPA (Semester Grade Point Average) and CGPA (Cumulative Grade Point Average) for students of APJ Abdul Kalam Technological University (KTU).

## Features

- **SGPA Calculator:**  
  Enter your subjects, credits, and grades to instantly calculate your SGPA for any semester.

- **CGPA Calculator:**  
  Add your SGPA for each semester to get your overall CGPA.

- **KTU Grading System Reference:**  
  Includes a table of KTU grade points and percentage ranges for easy reference.

- **Responsive Design:**  
  Built with Tailwind CSS for a clean and mobile-friendly interface.

## How the App Works

- The app provides two main calculators: SGPA and CGPA.
- In the **SGPA Calculator**, you can add multiple subjects, specify their credits, and select the grade received. The app computes the total credits, total grade points, and your SGPA instantly.
- In the **CGPA Calculator**, you can add the SGPA for each semester you have completed. The app calculates your overall CGPA by averaging the SGPAs.
- The grading system and calculation formulas are displayed for easy reference.
- All calculations are performed instantly in the browser using JavaScript—no data is sent to any server.

## Example Usage

### Calculating SGPA

1. Enter each subject's name, credits, and grade.
2. Click **Add Course** to add more subjects.
3. Click **Calculate SGPA** to see your semester results, including total credits, total grade points, and SGPA.

### Calculating CGPA

1. Enter the SGPA for each semester you have completed.
2. Click **Add Semester** to add more semesters.
3. Click **Calculate CGPA** to see your overall CGPA and total semesters.

## How to Use

1. **Clone or Download the Repository**
2. Open `index.html` in your browser.
3. Use the SGPA Calculator section to add your subjects, credits, and grades.
4. Click "Calculate SGPA" to view your semester results.
5. Use the CGPA Calculator section to add your SGPA for each semester.
6. Click "Calculate CGPA" to view your overall CGPA.

## Grading System

| Grade | Points | Percentage    |
| ----- | ------ | ------------- |
| S     | 10     | 90% and above |
| A     | 9      | 85-89%        |
| B     | 8      | 80-84%        |
| C     | 7      | 70-79%        |
| D     | 6      | 60-69%        |
| E     | 5      | 50-59%        |
| F     | 0      | Below 50%     |

## Calculation Formulas

- **SGPA:**  
  `SGPA = Σ(Credit × Grade Point) / ΣCredits`

- **CGPA:**  
  `CGPA = Σ(SGPA of each semester) / Number of semesters`

## Technologies Used

- HTML, CSS (Tailwind CSS)
- JavaScript

## License

This project is for educational purposes only and is not affiliated with KTU.
