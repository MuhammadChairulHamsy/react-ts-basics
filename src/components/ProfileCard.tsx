type ProfileCardProps = {
  name: string;
  age: number;
  hobby: string;
  job?: string;
};

export const ProfileCard = (props: ProfileCardProps) => {
  const {name, age, hobby, job} = props;
  return (
    <div className="m-2 rounded-2xl p-3 bg-amber-500 max-w-2xs">
      <p>Name: {name}</p>
      <p>Umur: {age}</p>
      <p>Hobi: {hobby}</p>
      {job && <p>Job: {job}</p>}
    </div>
  );
};
