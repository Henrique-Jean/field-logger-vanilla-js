let logs = JSON.parse(localStorage.getItem('fieldLogs')) || []

const logForm = document.getElementById('log-form');
const descriptionInput = document.getElementById('description');
const severityInput = document.getElementById('severity');
const logsList = document.getElementById('logs-list');
const fiLterBtn = document.getElementById('filter-btn')

function saveToLocalStorage() {
    localStorage.setItem('fieldLogs', JSON.stringify(logs));
}

function renderLogs(filter = null) {
    logsList.innerHTML = '';

    const logsToRender = filter === 'high'
        ? logs.filter(log => log.severity === 'high')
        : logs;

    if (logsToRender.lenght === 0) {
        logsList.innerHTML = '<li class ="empty-state">No logs found.</li>';
        return;
    }

    logsToRender.forEach(log => {
        const li = document.createElement('li');
        li.className = `log-card border-${log.severity}`;

        li.innerHTML = `
            <div class="log-info">
                <h3>${log.description}</h3>
                <span>${new Date(log.id).toLocaleString()}</span>
            </div>
            <span class="badge" style="background-color: var(--status-${log,severity})">
                ${log.severity.toUpperCase()}
                </span>
                }`;
        logsList.appendChild(li)

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
    renderLogs;

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

