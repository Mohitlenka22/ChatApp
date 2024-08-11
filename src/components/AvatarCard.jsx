import { Avatar, AvatarGroup } from '@mui/material';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <div>
      <AvatarGroup max={max} sx={{ position: 'relative' }}>
        <div className="w-12 h-20">
          {avatar?.map((i, index) => (
            <Avatar
              src={i}
              key={Math.random() * 100}
              style={{
                border: '2px solid white',
                position: 'absolute',
                top: '2rem',
                left: `${index + 0.5}rem`,
                borderRadius: '100%',
              }}
              alt={`Avatar ${index}`}
            />
          ))}
        </div>
      </AvatarGroup>
    </div>
  );
};

export default AvatarCard;
