import { signIn } from '@/apis/auth'
import AuthLayout from '@/layouts/AuthLayout'
import { setAccessToken } from '@/utils/accessToken'
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import Head from 'next/head'
import { useRouter } from 'next/navigation'



export default function Login() {
  const router = useRouter()

  const formik = useFormik( {
    initialValues: {
      email   : '',
      password: '',
      submit  : null,
    },

    // validationSchema: Yup.object({
    //   email: Yup.string()
    //             .email('Must be a valid email')
    //             .max(255)
    //             .required('Email is required'),
    //   password: Yup.string().max(255).required('Password is required'),
    // }),


    onSubmit: async ( values, helpers ) => {
      try {
        const token = await signIn( {
          username: values.email,
          password: values.password,
        } )
        if ( token.accessToken ) setAccessToken( token.accessToken );
        router.push( '/board' )
      }
      catch ( err: any ) {
        helpers.setStatus( { success: false } )
        helpers.setErrors( { submit: 'ID or Password is incorrect' } )
        helpers.setSubmitting( false )
      }
    },
  } )

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <AuthLayout>
        <Box
          sx={ {
            backgroundColor: 'background.paper',
            flex           : '1 1 auto',
            alignItems     : 'center',
            display        : 'flex',
            justifyContent : 'center',
          } }
        >
          <Box
            sx={ {
              maxWidth: 550,
              px      : 3,
              py      : '100px',
              width   : '100%',
            } }
          >
            <div>
              <Stack spacing={ 1 } sx={ { mb: 3 } }>
                <Typography variant="h4">Login</Typography>
              </Stack>

              <form noValidate onSubmit={ formik.handleSubmit }>
                <Stack spacing={ 3 }>
                  <TextField
                    error={
                      !!(
                        formik.touched.email &&
                        formik.errors.email
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.email &&
                      formik.errors.email
                    }
                    label="Email Address"
                    name="email"
                    onBlur={ formik.handleBlur }
                    onChange={ formik.handleChange }
                    type="email"
                    value={ formik.values.email }
                  />
                  <TextField
                    error={
                      !!(
                        formik.touched.password &&
                        formik.errors.password
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.password &&
                      formik.errors.password
                    }
                    label="Password"
                    name="password"
                    onBlur={ formik.handleBlur }
                    onChange={ formik.handleChange }
                    type="password"
                    value={ formik.values.password }
                  />
                </Stack>
                { formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={ { mt: 3 } }
                    variant="body2"
                  >
                    { formik.errors.submit }
                  </Typography>
                ) }
                <Button
                  fullWidth
                  size="large"
                  sx={ { mt: 3 } }
                  type="submit"
                  variant="contained"
                  color="warning"
                >
                  Continue
                </Button>
                <Alert severity="info" sx={ { mt: 3 } }>
                  <div>
                    Inquiry about Login <b>chanyang721@gmail.com</b>
                  </div>
                </Alert>
              </form>
            </div>
          </Box>
        </Box>
      </AuthLayout>
    </>
  )
}