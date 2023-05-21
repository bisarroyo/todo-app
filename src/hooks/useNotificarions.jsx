import toast, { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { useAppContext } from './useAppContext'
import { useTodo } from './useTodo'

export const UseNotification = () => {
  const { handleNotification } = useTodo()

  // extract notifications from the global state
  const {
    notification: { text, type }
  } = useAppContext()
  const [toastNotification, setToastNotification] = useState('')

  const notify = (text) => {
    const notificationTypes = {
      success: toast.success,
      error: toast.error
    }
    const notificationFunction = notificationTypes[type]
    if (notificationFunction) {
      notificationFunction(text, {
        duration: 4000,
        position: 'bottom-right'
      })
      handleNotification()
    } else {
      notificationTypes.success(text, {
        duration: 4000,
        position: 'bottom-right'
      })
      handleNotification()
    }
  }
  console.log(toastNotification)

  if (toastNotification !== text) {
    setToastNotification(text)
  }

  useEffect(() => {
    if (toastNotification !== '' && toastNotification !== undefined) {
      notify(toastNotification)
    }
  }, [toastNotification])
  return <Toaster />
}
