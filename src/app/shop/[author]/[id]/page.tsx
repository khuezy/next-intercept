export default function Page({ params }: any) {
  return <div>
    ID: {params.author + ' ' + params.id}
  </div>
}