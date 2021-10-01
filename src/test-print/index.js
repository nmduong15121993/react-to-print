import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './component-to-print';

const TestPrint = () => {
  const componentRef = useRef();

  const dataPrint = [
    {
      key: 0,
      title: 'Test SayHi',
      data: [
        {
          id: 0,
          content: " SayHi 1"
        },
      ]
    },
    {
      key: 1,
      title: 'Test Hello',
      data: [
        {
          id: 0,
          content: "Hello 1"
        },
        {
          id: 1,
          content: "Hello 2"
        },
      ]
    },
    {
      key: 2,
      title: 'Test Bye Bye',
      data: [
        {
          id: 0,
          content: "Bye Bye 1"
        },
        {
          id: 1,
          content: "Bye Bye 2"
        },
      ]
    },
  ]


  return (
    <>
      <h1>Test React To Print</h1>
      <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
        {
          dataPrint.map(item => (
            <div key={item.key}>
              <div>
                {
                  item.data?.map((data, index) => (
                    <div key={data.id}>
                      <h5>Content: { data.content }</h5>
                      <button>Print</button>

                      <div style={{ display: 'none' }}>
                        <ComponentToPrint ref={componentRef} dataPrint={data}/>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
       
      </div>
    </>
  )
}

export { TestPrint };