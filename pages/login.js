import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div>
      <h1>This is login page</h1>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
