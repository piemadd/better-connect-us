const ObjectToHTML = ({ input, prev = [] }) => {
  console.log(input);
  console.log(prev)
  console.log(typeof input)
  switch (typeof input) {
    case 'string':
      return <p>{input}</p>;
    case 'number':
      return <p>{input}</p>;
    case 'boolean':
      return <p>{input}</p>;
    case 'object':
      return (
        <table>
          {Object.keys(input).map((key) => {
            const localPrev = [...prev, key];
            console.log(localPrev)
            return (
              <tr key={`obj-to-html-child-${localPrev.join('-')}`} pierodebug={`obj-to-html-child-${localPrev.join('-')}`}  >
                <td>{key}</td>
                <td><ObjectToHTML input={input[key]} prev={localPrev}/></td>
              </tr>
            );
          })}
        </table>
      );
    default:
      return <>{JSON.stringify(input)}</>;
  }
};


export default ObjectToHTML;