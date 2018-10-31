var activeTicket, ticketList;

function changeTicket() {

    // Move new to top
    idEl.add(idEl[idEl.selectedIndex], 0);

    // Load info
    browser.storage.local.get(idEl.value.toString()).then(loadTicket);
}

// Generate option El
function addOption(ticket, index) {
    let suffix = ticket.toString(),
        prefix = 'INC0000'.slice(0, 16 - suffix.length);
    idEl.add(new Option(prefix.concat(suffix), ticket), index);
}

function saveList() {
    let obj = {
        ticketList: []
    };

    idEl.forEach(opt => {
        obj.ticketList.push(opt.value);
    });

    browser.storage.local.set(obj);
}

// Save ticket info to storage
function saveTicket() {
    let obj = {},
        tkt = {
            summary: summaryEl.value,
            company: companyEl.value,
            caller: {
                name: callerNameEl.value,
                phone: callerPhoneEl.value,
                email: callerEmailEl.value
            },
            devices: []
        };

    while (deviceTabEl.hasChildNodes()) {
        //

        deviceTabEl.removeChild(deviceTabEl.lastChild);
        deviceContentEl.removeChild(deviceContentEl.lastChild);
    }

    obj[idEl[0].value] = tkt;

    browser.storage.local.set(obj);
}

// Load ticket info from storage
function loadTicket(result) {

    if (result.hasOwnProperty(idEl.value)) {
        let ticket = result[idEl.value];
        summaryEl.value = ticket.summary;
        companyEl.value = ticket.company;
        //callerEl.value = ticket.caller;
        //devicesEl.value = ticket.devices;
        ticket.devices.forEach(insertDevice);
    }

}

$(function () {
    idEl = document.querySelector('#mn-id'),
        summaryEl = document.querySelector('#mn-summary'),
        companyEl = document.querySelector('#mn-company'),
        callerNameEl = document.querySelector('#mn-caller-name'),
        callerPhoneEl = document.querySelector('#mn-caller-phone'),
        callerEmailEl = document.querySelector('#mn-caller-email'),
        deviceTabEl = document.querySelector('#mn-device-tab'),
        deviceContentEl = document.querySelector('#mn-device-content'),
        alertEl = document.querySelector('#mn-alerts');

    idEl.addEventListener('change', changeTicket);

    browser.storage.local.get('ticketList').then(result => {
        if (result.hasOwnProperty('ticketList') && result.ticketList.length > 0) {
            result.ticketList.forEach(addOption, onError);
            browser.storage.local.get(result.ticketList[0].toString()).then(loadTicket, onError);
        } else {
            generateDefaultData();
        }
    });
});