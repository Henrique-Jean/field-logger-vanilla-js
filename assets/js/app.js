let logs = JSON.parse(localStorage.getItem('fieldLogs')) || []

const logForm = document.getElementById('log-form');
const descriptionInput = document.getElementById('description');
const severityInput = document.getElementById('severity');
const logsList = document.getElementById('logs-list');
const filterBtn = document.getElementById('filter-btn')

function saveToLocalStorage() {
    localStorage.setItem('fieldLogs', JSON.stringify(logs));
}

function renderLogs(filter = null) {
    logsList.innerHTML = '';

    const logsToRender = filter === 'high'
        ? logs.filter(log => log.severity === 'high')
        : logs;

    if (logsToRender.length === 0) {
        logsList.innerHTML = '<li class ="empty-state">No logs found.</li>';
        return;
    }

    logsToRender.forEach(log => {
        const li = document.createElement('li');
        li.className = `log-card border-${log.severity}`;

        li.innerHTML= `
            <div class="log-info">
                <h3>${log.description}</h3>
                <span>${new Date(log.id).toLocaleString()}</span>
            </div>

            <div class="actions">
                <span class='badge' style="background-color: var(--status-${log.severity})">
                    ${log.severity.toUpperCase()}
                </span>

                <button class='delete-btn' data-id="${log.id}">
                &times;
                </button>
            </div>
                `;
        logsList.appendChild(li);
            
});
}

function addLog(e) {
    e.preventDefault();

    const description = descriptionInput.value
    const severity = severityInput.value

    if (description.trim() === '') {
        alert('Please enter a description');
        return;
    };

    const newLog = {
        id: Date.now(),
        description: description,
        severity: severity
    };

    logs.push(newLog);

    saveToLocalStorage();
    renderLogs();

    logForm.reset();
}

logForm.addEventListener('submit', addLog)

document.addEventListener('DOMContentLoaded', () => {
    renderLogs();
});

let isFiltered = false;
filterBtn.addEventListener('click', () => {
    isFiltered = !isFiltered;

    if (isFiltered) {
        renderLogs('high');
        filterBtn.textContent = 'Show All';
        filterBtn.classList.add('active');
    }
});

function removeLog(id){
    if (!confirm('Are you sure you want to delete this log?'))return;

logs = logs.filter(log => log.id !== id);

saveToLocalStorage();
renderLogs();
}

logsList.addEventListener('click', (e) =>{
    const btn = e.target.closest('.delete-btn');

    if (!btn) return;

    const id = Number(btn.dataset.id);

    removeLog(id);


});
