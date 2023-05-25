const drawContainer = (containerSize, childSize, numberOfChildren) => {
  const realNumberOfChildren = Math.pow(Math.floor(containerSize / childSize), 2) < numberOfChildren ? Math.pow(Math.floor(containerSize / childSize), 2) : numberOfChildren;

  compareNumberOfChildren(realNumberOfChildren, numberOfChildren);

  const mainSquare = document.querySelector('#mainSquare');
  mainSquare.style.width = containerSize + 'px';
  mainSquare.style.height = containerSize + 'px';

  for(let i = 0; i < realNumberOfChildren; i ++) {
    const childSquare = document.createElement('div');
    childSquare.style.width = childSize + 'px';
    childSquare.style.height = childSize + 'px';
    childSquare.style.backgroundColor = generateColor();

    mainSquare.append(childSquare);

    let timer = null;

    childSquare.addEventListener('mouseenter', (event) => {
      event.target.style.backgroundColor = generateColor();
      timer = setTimeout(() => {
        event.target.remove();
      }, 2000);
    });

    childSquare.addEventListener('mouseleave', () => {
      clearTimeout(timer);
    });

  };
};

const generateColor = () => {
  let hex = '#';
  for(let i = 0; i < 6; i ++) {
    hex += Math.floor(Math.random() * 16).toString(16);
  };
  return hex;
};

const compareNumberOfChildren = (realNumber, number) => {
  if(realNumber < number) {
    const message = document.createElement('div');
    message.textContent = `The preset number of children is ${number}. The actual number of children is ${realNumber}`;
    document.body.append(message);
  }
};

drawContainer(200, 50, 17);
