# Tomato Checkout Flow

A cross platform UI template to build a Food Delivery App that provides all the necessary screens along with NativeBase and React Navigation.

### Demo

This is an design app, so APIs are not connected. You can add dummy data while checking it out.
Demo Link: [tomato-app](https://madewithnativebase.com/projects/tomato-app)

### Contributors

#### Code Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/GeekyAnts/tomato-clone-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=GeekyAnts/tomato-clone-app" />
</a>

</a>

#### Contribution guidelines:

Code-level contributions to Tomato app come in the form of pull requests. These are done by forking the repo and making changes locally. You can raise a PR against development branch.

### Code Snippets

Snippet showing rendering of content on basis of Breakpoint on web

```jsx
function ZomatoCategories() {
  const router = useRouter();
  const noColumn = useBreakpointValue({
    base: 2,
    md: 4,
  });

return (
<HStack
direction={{ base: "column", md: "row" }}
mt="16"
flexWrap="wrap"
width={{ base: "80%", sm: "50%", md: "100%" }}
justifyContent={{ base: "", sm: "center" }}
space={{ base: 4, lg: 2 }} >
{list.map((item, index) => (
<Pressable
key={index}
onPress={() => {
router.push("/goformeal");
}} >
<Card item={item} />
</Pressable>
))}
</HStack>
);

```
