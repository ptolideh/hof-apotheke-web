type Obj<T> = { [key in keyof T]: any };

export function withStyle<T>(baseName: string, elements: Obj<T>) {
  return Object.fromEntries(
    Object.entries(elements).map(([key, config]: [string, any]) => {
      const { as, prefix, props, ...sx } = config;

      return [
        key,
        {
          ...(as ? { as } : {}),
          className: `${baseName}-${prefix ? `${prefix}-` : ''}${key}`,
          sx,
          ...props
        }
      ];
    })
  ) as Obj<typeof elements>;
}

export function withStyles<T>(baseName: string, elements: Obj<T>) {
  return Object.fromEntries(
    Object.entries(elements).map(([key, values]: [string, any]) => {
      const { sx, prefix, ...props } = values;
      const label = `${baseName}__${prefix ? `${prefix}-` : ''}${key}`;
      // if sx, return as a collection of props
      // if no sx specified, consider every values as StyleOptions
      return [
        key,
        sx ? { sx: { label, ...sx }, ...props } : { label, ...values }
      ];
    })
  ) as Obj<typeof elements>;
}

/*
export const withStyle = (Component: any) => (config: any) => {
  const { cls: name = '', as, ...rest } = config;
  let sxProps = rest;
  let boxProps = {};
  if (config.sx) {
    const { sx, ...rest } = config;
    sxProps = sx;
    boxProps = rest;
  }

  return function WrapperComponent(props: any) {
    return createElement(Component, {
      ...(as ? { as } : {}),
      className: `${name} ${props?.className ?? ''}`,
      sx: sxProps,
      ...boxProps,
      ...props
    });
  };
}; */
