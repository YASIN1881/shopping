const $ = document

const notification = $.querySelector('#notification')
const closeNotificationIcon = $.querySelector('#closeNotification')

function closeCloseNotification () {
    notification.remove()
}

closeNotificationIcon.addEventListener('click',closeCloseNotification)