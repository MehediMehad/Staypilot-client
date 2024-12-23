import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { Helmet } from 'react-helmet-async'

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col w-[95%] md:w-[500px] p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-4 flex justify-center items-center'>
                        <div className="w-28 ">
                            <img src="https://i.postimg.cc/856gjn7d/end-user.png" alt="login" />
                        </div>
                    </div>
                    <form
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-hoverPrimary bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    autoComplete='current-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-hoverPrimary bg-gray-200 text-gray-900'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-primary hover:bg-hoverPrimary w-full rounded-md py-3 text-white'
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className='space-y-1 hidden'>
                        <button className='text-xs hover:underline hover:text-primary/75 text-gray-400'>
                            Forgot password?
                        </button>
                    </div>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Don&apos;t have an account yet?{' '}
                        <Link
                            to='/signup'
                            className='hover:underline hover:text-primary text-gray-600'
                        >
                            Sign up
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
