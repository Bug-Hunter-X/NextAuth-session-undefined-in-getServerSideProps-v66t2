```javascript
import {unstable_getServerSession} from "next-auth";

async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Pass data to the page via props
  return { props: { session } };
}

function Profile({ session }) {
  if(!session) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>Your email: {session.user.email}</p>
    </div>
  );
}

export default Profile;
export {getServerSideProps};
```