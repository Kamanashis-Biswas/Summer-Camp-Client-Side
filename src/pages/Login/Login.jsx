import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/providers/AuthProvider";
import Swal from 'sweetalert2'
import SocialLogin from "./SocialLogin";



const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="mb-6 text-lg text-center"><small>New Here? <Link className="font-bold" to="/signup">Create an account</Link> </small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;