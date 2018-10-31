function generateDefaultData() {
    
    let data = {
        ticketList: [17121, 17122, 17123, 17124, 17125, 17126, 17127, 17128, 17129],
        17121: {
            summary: 'IM//SITE1//DEVICE//ALARM',
            company: 'COMPANY1',
            caller: {
                name: 'Caller 1',
                phone: 5126661111,
                email: 'caller1@cisco.com'
            },
            devices: [{
                name: 'TP1',
                site: 'SITE1',
                managedIP: '10.1.1.1',
                customerIP: '1.1.1.1',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }, {
                name: 'TP11',
                site: 'SITE11',
                managedIP: '10.1.1.11',
                customerIP: '1.1.1.11',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17122: {
            summary: 'IM//SITE2//DEVICE2//ALARM',
            company: 'COMPANY2',
            caller: {
                name: 'Caller 2',
                phone: 5126662222,
                email: 'caller2@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE2',
                managedIP: '10.2.2.2',
                customerIP: '2.2.2.2',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17123: {
            summary: 'IM//SITE3//DEVICE3//ALARM',
            company: 'COMPANY3',
            caller: {
                name: 'Caller 3',
                phone: 5126663333,
                email: 'caller3@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE3',
                managedIP: '10.3.3.3',
                customerIP: '3.3.3.3',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17124: {
            summary: 'IM//SITE4//DEVICE4//ALARM',
            company: 'COMPANY4',
            caller: {
                name: 'Caller 4',
                phone: 5126664444,
                email: 'caller4@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE4',
                managedIP: '10.4.4.4',
                customerIP: '4.4.4.4',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17125: {
            summary: 'IM//SITE5//DEVICE5//ALARM',
            company: 'COMPANY5',
            caller: {
                name: 'Caller 5',
                phone: 5126665555,
                email: 'caller5@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE5',
                managedIP: '10.5.5.5',
                customerIP: '5.5.5.5',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17126: {
            summary: 'IM//SITE6//DEVICE6//ALARM',
            company: 'COMPANY6',
            caller: {
                name: 'Caller 6',
                phone: 5126666666,
                email: 'caller6@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE6',
                managedIP: '10.6.6.6',
                customerIP: '6.6.6.6',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17127: {
            summary: 'IM//SITE7//DEVICE7//ALARM',
            company: 'COMPANY7',
            caller: {
                name: 'Caller 7',
                phone: 5126667777,
                email: 'caller7@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE7',
                managedIP: '10.7.7.7',
                customerIP: '7.7.7.7',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17128: {
            summary: 'IM//SITE8//DEVICE8//ALARM',
            company: 'COMPANY8',
            caller: {
                name: 'Caller 8',
                phone: 5126668888,
                email: 'caller8@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE8',
                managedIP: '10.8.8.8',
                customerIP: '8.8.8.8',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        },
        17129: {
            summary: 'IM//SITE9//DEVICE9//ALARM',
            company: 'COMPANY9',
            caller: {
                name: 'Caller 9',
                phone: 5126669999,
                email: 'caller9@cisco.com'
            },
            devices: [{
                name: 'TP',
                site: 'SITE9',
                managedIP: '10.9.9.9',
                customerIP: '9.9.9.9',
                credentials: [{
                    protocol: 'ssh',
                    login: 'admin',
                    password: 'cisco'
                }, {
                    protocol: 'https',
                    login: 'admin',
                    password: 'cisco123'
                }],
                alarms: [{
                    time: Date.now(),
                    notes: 'Crit ping'
                }, {
                    time: Date.now(),
                    notes: 'SNMP'
                }]
            }]
        }
    }

    browser.storage.local.set(data);
}