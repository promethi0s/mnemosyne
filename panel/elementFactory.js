function addDevice(device, index) {

    var html, trFault, tdFault,
        active = index === 0 ? ' active' : '',
        related = device.related ? ' text-danger' : '';

    html =
    '<a class="nav-item nav-link' + active + related + '" data-toggle="tab" href="#dev' + index + '">' + device.model + '</a>';
    deviceTabsEl.insertAdjacentHTML('beforeend', html);

    html =
    '<div class="tab-pane show active" id="dev' + index + '">\
        <div class="form-row mb-2">\
            <div class="col-6">\
                <input type="text" class="form-control dev-managed-ip" placeholder="Managed IP" value="' + device.managedIP + '" readonly>\
            </div>\
            <div class="col-6">\
                <input type="text" class="form-control dev-customer-ip" placeholder="Customer IP" value="' + device.customerIP + '" readonly>\
            </div>\
        </div>\
        <div class="form-row mb-2">\
            <div class="col-6">\
                <input type="text" class="form-control dev-login" placeholder="Login" value="' + device.login + '" readonly>\
            </div>\
            <div class="col-6">\
                <input type="text" class="form-control dev-password" placeholder="Password" value="' + device.password + '" readonly>\
            </div>\
        </div>\
        <div class="form-row mb-2">\
            <div class="col-6">\
                <input type="text" class="form-control dev-site" placeholder="Site" value="' + device.site + '" readonly>\
            </div>\
            <div class="col-6">\
                <input type="text" class="form-control dev-name" placeholder="Name" value="' + device.name + '" readonly>\
            </div>\
        </div>\
        <table class="table table-sm table-hover">\
            <thead>\
                <tr>\
                    <th scope="col">Protocol</th>\
                    <th scope="col">Login</th>\
                    <th scope="col">Password</th>\
                </tr>\
            </thead>\
            <tbody>';

    device.credentials.forEach(cred => {

        html +=
                '<tr>\
                    <td>' + cred.protocol + '</td>\
                    <td>' + cred.login + '</td>\
                    <td>' + cred.password + '</td>\
                </tr>';

    });

    html +=
            '</tbody>\
        </table>\
        <table class="table table-sm table-hover table-responsive">\
            <thead>\
                <tr>\
                    <th scope="col">Start</th>\
                    <th scope="col">End</th>\
                    <th scope="col">Alarm Details</th>\
                </tr>\
            </thead>\
            <tbody>';

    device.alarms.forEach(alarm => {

        if (alarm.impacting) {
            trFault = ' class="alert-danger"';
            tdFault = ' class="alert-link"';
        } else {
            trFault = '';
            tdFault = '';
        }

        html +=
                '<tr' + trFault + '>\
                    <td>' + alarm.start + '</td>\
                    <td>' + alarm.end + '</td>\
                    <td><a href="' + alarm.url + '"' + tdFault + ' target="_blank">' + alarm.details + '</a></td>\
                </tr>';

    });

    html +=
            '</tbody>\
        </table>\
    </div>';

    devicesEl.insertAdjacentHTML('beforeend', html);

}

function addAlert(text, category = 'danger') {

    var html = 
    '<div class="alert alert-' + category + ' alert-dismissible fade show">\
        <a href="#">' + text +'</a>\
        <button type="button" class="close" data-dismiss="alert">\
            <span>&times;</span>\
        </button>\
    </div>';

    alertEl.insertAdjacentHTML('beforeend', html);
    
}