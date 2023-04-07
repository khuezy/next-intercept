export default function Page({ params }) {
  return <div>
    Intercepted Id page {params.author} {params.id}
  </div>
}