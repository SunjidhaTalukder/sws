// Fetch course data from courses.json file
fetch('assets/json/courses.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Get the container element where the course boxes should be appended
    const courseContainer = document.querySelector('.course_box');

    // Iterate through the course data and create course boxes dynamically
    data.forEach(course => {
      const courseBox = document.createElement('div');
      courseBox.className = 'course_box';
      courseBox.innerHTML = `
        <h1>${course.title}</h1>
        <div class='desciprt'>
          <h3>${course.description}</h3>
          <div class='offers'>
            <h5>We are offering:</h5>
            <table>
              <tr>
                <th>Subject</th>
                <th>Length</th>
                <th>Cost</th>
              </tr>
              ${course.offers.map(offer => `
                <tr>
                  <td>${offer.subject}</td>
                  <td>${offer.length}</td>
                  <td>${offer.cost}</td>
                </tr>
              `).join('')}
            </table>
          </div>
		  <div class='pay_button'><a href="payment.html" target="blank">Register</a></div>
        </div>
      `;
      courseContainer.appendChild(courseBox); // Append the course box to the course container
    });
  })
  .catch(error => console.error('Error fetching course data:', error));
