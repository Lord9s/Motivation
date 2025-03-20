document.addEventListener('DOMContentLoaded', () => {
    const leaderboard = document.getElementById('leaderboard');

    // Example data
    const users = [
        { name: 'User1', points: 15000 },
        { name: 'User2', points: 12000 },
        // Add more users here
    ];

    users.sort((a, b) => b.points - a.points);
    users.slice(0, 20).forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.points} points`;
        leaderboard.appendChild(li);
    });
});