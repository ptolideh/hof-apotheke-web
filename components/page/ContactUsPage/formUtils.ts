const formConfig = {
  name: {
    name: 'name',
    label: 'Full name',
    initialValue: '',
  },
  email: {
    name: 'email',
    label: 'Email',
    initialValue: '',
  },
  subject: {
    name: 'subject',
    label: 'Subject',
    initialValue: '',
  },
  message: {
    name: 'message',
    label: 'Message',
    initialValue: '',
  },
};

export const FM = formConfig;

export const getId = (name: string) => `contactFomr-${name}`;

export const initialValues = Object.fromEntries(
  Object.entries(formConfig).map(([fieldKey, fieldValues]) => {
    return [fieldKey, fieldValues.initialValue];
  }),
);

export const required = (value: any) => (value ? undefined : 'Required');

export const trim = (value: any) => value?.trim() ?? '';

export const getTextFieldErrorProps = (meta: any) => ({
  error: meta.touched && meta.invalid,
  helperText: meta.touched && meta.error,
});
