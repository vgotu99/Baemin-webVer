import Button from './Button';
import { useNavigate } from 'react-router-dom';

const JoinHeader = () => {
  const nav = useNavigate()

  return (
    <div className="joinHeader">
      <Button onClick={() => nav('/')} type={'join'} imgType={'mainLogo'} />
    </div>
  );
};

export default JoinHeader