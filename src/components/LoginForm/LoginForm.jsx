import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import c from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={c.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={c.label}>
        Email
        <input
          className={c.label__input}
          type="email"
          name="email"
          placeholder="Enter e-mail"
        />
      </label>
      <label className={c.label}>
        Password
        <input
          className={c.label__input}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>
      <button className={c.formBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
