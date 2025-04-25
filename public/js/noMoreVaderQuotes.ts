const noMoreVaderQuotes = () => {
    const messageSection = document.querySelector('#message');
    if (messageSection) {
        messageSection.textContent = 'No Darth Vader quote to delete!';
    }
}

export default noMoreVaderQuotes;