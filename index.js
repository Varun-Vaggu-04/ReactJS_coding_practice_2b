const Notification = props => {
    //  Write your code here.
    const {className, image, message} = props
    return (
      <li className={className}>
        <img 
            src={image} 
            alt='image' 
        />
        <p>
            {message}
        </p>
      </li>
    )
  }
  
  const element = (
    //  Write your code here.
    <div>
      <h1>Notifications</h1>
      <ul>
        <Notification
          className='info-message'
          image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
          message='Information Message'
        />
        <Notification
          className='success-message'
          image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          message='Success Message'
        />
        <Notification
          className='warning-message'
          image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
          message='Warning Message'
        />
        <Notification
          className='error-message'
          image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
          message='Error Message'
        />
      </ul>
    </div>
  )
  
  ReactDOM.render(element, document.getElementById('root'))
  