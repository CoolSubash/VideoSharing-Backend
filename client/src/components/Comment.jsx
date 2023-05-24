import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`

const Text = styled.span`
  font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACCCAMAAADovAORAAAAZlBMVEX///8AknAAjmrr9PEpmnvz+PcAjGcAh2D5/PsAiWN2spxsrZbw9/XR5+DX6eONwK+jzcCs0sZhrpbI4tvj8e222M1bp41Oood/uqYAg1ogknDA3dRBoYRIpYpVqpEzlXRrtJ6Zx7hsewgXAAAD9klEQVR4nO2ZYZOjIAyGARGwi7hWbK21rf3/f/IS0HZ3bnd1zrnT3uT5sDW64GuahGAZIwiCIAiCIAiCIAiCIAiCIAiCIAiCIIj/E5Nam5q1VczDlcW+k7LbN2W+tpYpTHW5CSUE5xw+2mu5aR+fpeaf0HK7gs0+uPUz6uDX1vU1eat+ExuC4ry2sq/I299dO1Ctre1JkrsQndWXro1k9doqR6pOiAI+U/mtbzEgthK/F1B5TBi7/uBckHvYSH3gArRABfvJtxgO72sLjRRte8uZ7Sbk8mxtoQM+T8G5ekItz+7/VJVNqjxP0nBsrLVwxjkHf1NjYwRPcLRxoI3TpWmKdjpiTTw5WOkisVXDNSILTJk6413eCH26sYRLyVnyY55FBBTfGr4EifM5KeXFsLKVI7xmhj8subcL1BYC9IQFNtujmcFdwRJ7Vp24kKycdi5XkGz3jKs+yNVcdIw1WiilwuBTzvwJrWCq3QK17yBPyd0OJSqo+H1ouLQ+FXhJ9KyZIReeDQeqEMNlFuz7W6CFq51l+QGNXceXrSsWH7dJjHFdvN0huLlyLmGNwjO7GXIxCkCJDg1EEYYxg7B3qIWtHyzjJfzTkryEr5B38Qjc0LCkCx+BKwg/p4c5cjVj4EblcBikph4dWEJg3B6rnkeXLCrSMPdQ5RMoBh7yhPPWxWtHUJ7b4wy1IDcBuTwIQ3OYoYZHbR/bDgNqdbFErbmBTz6u+We42bCoergm/Ty5J1aBsktIeagQKub++QRqP/t2WYX27ccJWfAHpFcgb7FjsDODAQe+4XN6XFVCacUnaJ/9MPq2WdZeOJAkEzwy3nkPqQF5MoTuOQqYmWp3McR8rbi4oqpKYzCNd7JX8Zh5kdwYcQ5USYtla+xYoOAKKJEzC9lDbjMc5HC+fdYs6Oqyhb5lIUFEnxqTQN3NGmbAB3rwyB0cXbC5y8QdH9cxU6MJEZqrsNjFcgY7PTD7WM2WaMZpVLfrsVeEPtvAzU4hOJjBul9CLM5bhLHLFLI5ZGiWzIUQKXaBhPU4SR+MtyW7Dy9xIlyDFWaFzTDLo9zL4OjJ/jG0OKaLEwn8vs6YA+jmwI2ZLDxUsE6LNku+kZnWme4aDGEvoAWJFywcCSxI52xKbWgg/ZvQWSbLcys7x+7PBkdeWSKeFndL5EL8+jx3foiABBjPD4f2OOVeHcd6l+M0MMxAT/rExmlH/vZWqX6Rzc/I/jW2liMvsnF/UP0gdzuvRZ58+9JJiE2+JKu+eaXHN6n26xemQhyS6ZHrYF7qdTRg6qP88LL/uGmxgfGnlL6oN/9TSuSVfqgiCIIgCIIgCIIgCIIgCIIgCIIgCIIgiD/mF1YSL9v4OqoSAAAAAElFTkSuQmCC" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      </Details>
    </Container>
  )
}

export default Comment
