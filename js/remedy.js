function loadTicket() {
    var ticket = new Ticket();
    var device = new Device();
    var ticketTabs = document.getElementsByTagName('dd');
    
    var company = document.getElementById('arid_WIN_0_1000000082').value;
    var site = document.getElementById('arid_WIN_0_260000001').value.split(':')[1];

    ticketTabs[21].click(); // Device Info
    var managedIP = document.getElementById('arid_WIN_0_900002758').value;
    var customerIP = document.getElementById('arid_WIN_0_900001038').value;

    document.getElementById('WIN_0_900002805').click(); // Credentials
    var credentialElems = document.getElementsByTagName('iframe')[2].contentDocument.getElementById('T1').children[1].children;
    var credentials = [];
    for (let i = 1; i < credentialElems.length; i++) {
        credentials.push({
            protocol: credentialElems[i].children[0].textContent,
            type: credentialElems[i].children[1].textContent,
            login: credentialElems[i].children[2].textContent,
            password: credentialElems[i].children[3].textContent
        });
    }
    document.getElementById('ardivcl').click();

    ticketTabs[2].click(); // Classification
    document.getElementById('arid_WIN_0_1000000063').value = 'Video';
    document.getElementById('arid_WIN_0_1000000064').value = 'Alarm Generated';
    var model = document.getElementById('arid_WIN_0_240001005').value;
    document.getElementById('arid_WIN_0_1000000065').value = 'Codec: Primary | Tandberg Endpoint';

    ticketTabs[5].click(); // Assignment
    document.getElementById('arid_WIN_0_1000000218').value = 'Nicholas Gibson';
    document.getElementById('arid_WIN_0_1000000715').value = 'TP ServiceDesk';

    
}
