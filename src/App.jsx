
function Profile() {
  return (
      <>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        <p>Lorem ipsum dolor sit amet.</p>
      </>
  )
}
function Profile2() {
  return (
    <>
      <img width={90} src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/02/08133553/Tesla.jpeg" alt="Nikola Tesla" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}
function Profile3() {
  return (
    <>
      <img width={90} src="https://theodisseanexperience.com/wp-content/uploads/2021/10/the-odissean-experience-mind-blog-01-5.jpeg" alt="Albert Einstein" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

export default function App() {
  return (
    <>
      <h1>Amazing Scientists</h1>
      <Profile />
      <h1>Male Scientists</h1>
      <Profile2 />
      <Profile3 />
    </>
  )
}