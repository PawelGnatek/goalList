import React from 'react';

import './CourseGoalItem.css';
import Button from '../../UI/Button/Button';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <div>
    <li className="goal-item" >
      {props.children}
      <Button onClick={deleteHandler}>It's DONE!</Button>
    </li>
    
    </div>
  );
};

export default CourseGoalItem;
