export interface Foldable<A> {
    // reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
    reduce<B>(f: (b: B, a: A) => B, x: B): B;
}
