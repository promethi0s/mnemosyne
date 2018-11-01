function RepAlarm(site, device, impacting, alarmDate, alarmTimealarmCleared, alarmDetails, alarmType, alarm3in30, model, ) {
    return
    'Incident has been Reported\
    \
    Affected:\
    ' + device.site + '//' + device.name + '\
    \
    Impact:\
    This alarm is generally one that will' + impacting ? '' : ' not' + ' impact future usage of the device' + impacting && alarm.clear ? ', however, appears to be clear at the time of this reporting' : '' + '\
    \
    Alarm Information:\
    ' + alarm.details + '\
    \
    Alarm History:\
    This alarm has' + alarm.history >= 3 ? '' : ' not'  + ' occurred on this device 3 or more times in the last 30 days\
    \
    Summary:\
    An alarm automatically generated a CMS Support ticket for this ' + device.model + ' when it ' + alarmIssue(alarm.details) + ' to our polling servers at ' +  alarm.start.toUTCString() + '\
    \
    Next Steps:\
    We are currently working towards isolating this issue\
    \
    Thank you,\
    \
    Nicholas Gibson\
    Cisco TelePresence Engineer\
    Cisco Managed Services\
    24/7 Service Desk\
      United States: +1-888-654-9113\
      International: +1-408-906-1014';
}

function RepCall(name, phone, email, site, device, impacting, summary) {
    return
    'Incident has been Reported\
    \
    Caller:\
    ' + name + ', ' + phone + ', ' + email + '\
    \
    Affected:\
    ' + site + '//' + device + '\
    \
    Impact:\
    This will' + impacting ? '' : ' not' + ' impact future meetings at this time\
    \
    Summary:\
    ' + summary + '\
    \
    Next Steps:\
    We are currently working towards isolating this issue.\
    \
    Thank you,\
    \
    Nicholas Gibson\
    Cisco TelePresence Engineer\
    Cisco Managed Services\
    24/7 Service Desk\
      United States: +1-888-654-9113\
      International: +1-408-906-1014'
}

function ResAlarm() {
    return
    'Incident has been Resolved\
    \
    Affected:\
    ' + device.site + '//' + device.name + '\
    \
    Impact:\
    There is no impact on future use of the device at this time\
    \
    Alarm Information:\
    ' + alarm.details + '\
    \
    Summary:\
    ' + summary + '\
    \
    Details:\
    --------------------------\
    \
    ----- CLI Output:\
    \
    \
    ----- CMD Output:\
    \
    \
    ----- GUI Output:\
    \
    \
    ----- LOG Output:\
    \
    \
    ----- EM7 Output:\
    \
    --------------------------\
    \
    Resolution:\
    CMS received an alarm when this device ' + resolution + '. The device is up and running at this time.\
    \
    Next Steps:\
    As no further actions are required, I will close this incident\
    \
    Thank you,\
    \
    Nicholas Gibson\
    Cisco TelePresence Engineer\
    Cisco Managed Services\
    24/7 Service Desk\
      United States: +1-888-654-9113\
      International: +1-408-906-1014';
}