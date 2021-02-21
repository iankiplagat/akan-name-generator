# Akan Names Generator

# Version

Akan-names-generator V1.0

#### A simple site that takes a user's name, gender, and date of birth, then generates there Akan name , February 18,2020.

#### By **Ian Kiplagat**

## Description

The Akans are a meta-ethnicity who primarily live in Ghana and Ivory Coast. They have a fairly unique naming system, which is based on the day in the week a child is born, and on the gender of the child. Children are given their first name as a 'day name' which corresponds to the day in the week they were born. This website takes a user's birthday on the form provided and calculates the day of the week they were born and then depending on their gender outputs their Akan Name.

## BDD

<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}

tr:nth-child(even) {
background-color: #dddddd;
}
</style>

</head>
<body>

<h2>Behaviour-Driven Development</h2>

<table>
  <tr>
    <th>Our program should handle:</th>
    <th>Input Example:</th>
    <th>Output Example:</th>
  </tr>
  <tr>
    <td>an empty or invalid date</td>
    <td>wrong date format</td>
    <td>You entered an invalid date. Please enter a valid one</td>
  </tr>
  <tr>
    <td>a date that is less than or equal to zero</td>
    <td>0</td>
    <td>You entered an invalid date. Please enter a valid one</td>
  </tr>
  <tr>
    <td>a date that is greater than 31</td>
    <td>33</td>
    <td>You entered an invalid date. Please enter a valid one</td>
  </tr>
  <tr>
    <td>a birth month that is less than or equal to zero</td>
    <td>-1</td>
    <td>You entered an invalid date. Please enter a valid one</td>
  </tr>
  <tr>
    <td>a birth month that is greater than 12</td>
    <td>13</td>
    <td>You entered an invalid date. Please enter a valid one</td>
  </tr>
  <tr>
    <td>It calculates the day of the week you were born and gives you your akan name based on the day of the week you were born</td>
    <td>01/01/2000</td>
    <td>your akan name is Kofi which means ou were born on Friday</td>
  </tr>
</table>

</body>
</html>

## Setup/Installation Requirements

To view the site, open the Github Pages link provided below on the README, or the netlify link of the published website provided in the about section. Here is a run through of how to set up the application

- Step 1 : Clone this repository using git clone https://github.com/kasparov-creat/akan-name-generator.git, or downloading a ZIP file of the code.
- Step 2 : The repository, if downloaded as a .zip file will need to be extracted o your preferred location and opened
- Step 3 : Open the index.html file to view the application on your preferred web browser.

## Known Bugs

No known bugs

## Technologies Used

- HTML
- CSS
- Javascript

## Support and contact details

Please feel free to contact me incase you run into any issues or have questions, ideas or concerns. You can contact me or make a contribution to the code. Please find my contact information listed below:

- Email: ianjkiplagat@gmail.com
- Telephone: +254742579020

### License

\*MIT License

Copyright (c) 2021 Ian Kiplagat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.\*
Copyright (c) 2021 **Ian Kiplagat**
