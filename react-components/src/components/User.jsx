import React from 'react';

const User = ({user}) => {
  return (
    <div className='user'>
      <p>
        Nome:{' '}
        <strong>
          {user.firstName} {user.lastName}
        </strong>
      </p>
    </div>
  );
};

export default User;
