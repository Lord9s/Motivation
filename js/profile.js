document.addEventListener('DOMContentLoaded', () => {
    const pointsElement = document.getElementById('points');
    const positionElement = document.getElementById('position');

    // Example user data
    const user = {
        points: 10000,
        position: 5
    };

    pointsElement.textContent = `Points: ${user.points}`;
    positionElement.textContent = `Position: ${user.position}`;
});