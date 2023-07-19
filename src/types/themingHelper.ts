import { FlattenSimpleInterpolation } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unnecessary-type-constraint
type EnforceArray<Z> = Z extends any[] ? Z : never

/*
 * How to use it:
 * First Generic is the keys of the object as an Union
 * Second Generic is the type of the arguments of the function
 * You should pass it as [ThemeType, TagShapes] for example
 * complete usage example:
 * type VariantProps = ThemingHelper<TagVariants, [ThemeType]>
 * const variants: VariantProps = {
 *  primary: theme => css`
 *    now you have the theme available in the function
 *    ...
 *  `
 *
 * or a basic one
 *
 * type VariantProps = ThemingHelper<TagVariants>
 */

export type ThemingHelper<
  T extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Z extends any[] | undefined = undefined
> = Record<
  T,
  Z extends undefined
    ? FlattenSimpleInterpolation
    : (...args: EnforceArray<Z>) => FlattenSimpleInterpolation
>
