import _ from './Form.module.css';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('data: ', data);
  };

  return (
    <form
      className={_.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={_.wrapp}>
        <label className={_.label} htmlFor="email">Email</label>
        <input
          className={_.input}
          type="text"
          id='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Fill this field',
            },
            pattern: {
              value: /^.+@.+\..+$/,
              message: 'incorrect input email!'
            },
          },
          )}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      <div className={_.wrapp}>
        <label className={_.label} htmlFor="password">Password</label>
        <input
          className={_.input}
          type="password"
          id='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Fill this field',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
              message: 'incorrect input password!'
            },
          },
          )}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className={_.error}>{errors.password.message}</p>}
      </div>

      <div className={_.wrappCheckbox}>
        <input
          className={_.checkbox}
          type='checkbox'
          id='save'
          {...register('save')}
        />
        <label
          className={_.labelCheckbox}
          htmlFor="save"
        >
          Save password
        </label>
      </div>
      <div className={_.submitWrapp}>
        <button className={_.submit} type='submit'>enter</button>
      </div>
    </form>
  );
};

export default Form;
