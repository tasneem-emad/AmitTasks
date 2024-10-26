function addQA() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    if (question && answer) {
        const qaObject = { question, answer };
        // console.log(qaObject);
        const qaList = JSON.parse(localStorage.getItem('qaList')) || [] ;

        qaList.push(qaObject);

        localStorage.setItem('qaList', JSON.stringify(qaList));
                
        displayQA();
    }
    else
    alert('Please fill in both fields');
    return;
}

function displayQA() {
    const qaList = JSON.parse(localStorage.getItem('qaList')) || [];
    const qaListDiv = document.getElementById('qaList');
    qaListDiv.innerHTML = '';

    qaList.forEach((qaObject, i) => {
        const qaItem = document.createElement('div');
        qaItem.classList.add('qa-item');
        qaItem.innerHTML = `<strong>Q${i + 1}:</strong> ${qaObject.question} <br> <strong>A:</strong> ${qaObject.answer}`;
        qaListDiv.appendChild(qaItem);
    });
}

window.onload = displayQA;
// localStorage.clear();

    

