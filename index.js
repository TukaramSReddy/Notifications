const Notification = (props) => {
  //  Write your code here.
  const { className, name, image, imageSize } = props;
  return (
    <div>
      <img className={imageSize} src={image} />
      <p className={className}>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container ">
    <h1 className="heading">Notifications</h1>
    <div>
      <div className="notificationsContainer1">
        <Notification
          imageSize="image"
          image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification className="message1" name="Information Message" />
      </div>
      <div className="notificationsContainer2">
        <Notification
          imageSize="image"
          image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification className="message2" name="Success Message" />
      </div>
      <div className="notificationsContainer3">
        <Notification
          imageSize="image"
          image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification className="message3" name="Warning Message" />
      </div>
      <div className="notificationsContainer4">
        <Notification
          imageSize="image"
          image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
        <Notification className="message4" name="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
