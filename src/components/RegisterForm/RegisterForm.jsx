import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import c from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={c.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={c.label}>
        UserName
        <input
          className={c.label__input}
          type="text"
          name="name"
          placeholder="Enter user name"
        />
      </label>
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
        Register
      </button>
    </form>
  );
};
