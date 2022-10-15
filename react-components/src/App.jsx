import React, { useState } from 'react';

const App = () => {
  const [escuro, setEscuro] = useState(false);

  const tema = {
    backgroundColor: escuro ? 'black' : 'white',
    color: escuro ? 'white' : 'black',
  };

  return (
    <div style={tema}>
      <h1>React - Tema claro/escuro</h1>
      <hr />
      <button onClick={() => setEscuro((oldValue) => !oldValue)}>Tema</button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
        laudantium, omnis asperiores consequuntur doloremque officia sed alias
        voluptas ut quo, nihil quasi atque? Corporis nesciunt autem non, atque
        corrupti nostrum.
      </p>
      <p>
        Possimus eum temporibus nemo maiores cumque eligendi illo perferendis ut
        reiciendis, cum iste quod. Commodi corrupti reprehenderit, laboriosam
        facere laudantium aliquam. Error illo modi voluptatem numquam
        consequatur tenetur vero at.
      </p>
      <p>
        Ut voluptatem sequi ipsa nam a voluptas officia praesentium voluptatum,
        placeat omnis animi corrupti eligendi dolorem veritatis. Facere,
        praesentium. Inventore cum fugiat voluptas? Doloremque non architecto
        consequatur optio aut atque?
      </p>
      <p>
        Voluptatum labore vitae perferendis architecto hic quaerat corporis
        atque natus libero reiciendis? Ipsam, tempore quia fugit suscipit
        inventore iusto unde quo incidunt sed dignissimos aspernatur,
        voluptatibus est. Quas, magni aut.
      </p>
      <p>
        Sequi, deserunt voluptatum quis recusandae odit suscipit voluptates.
        Vitae, libero eos nulla fugit eveniet itaque dignissimos aut cum
        adipisci iste voluptatibus sint accusamus placeat possimus hic
        blanditiis! Maxime, odit eos.
      </p>
      <p>
        Ipsa debitis natus dolor expedita vero ut exercitationem adipisci
        recusandae ab placeat deserunt nam, totam labore eos rerum quasi optio
        facilis soluta iste distinctio est asperiores odit. Excepturi, earum
        labore.
      </p>
      <p>
        Minus laborum sequi error molestias? Reiciendis, porro fugit pariatur
        sed voluptatibus ad voluptatum ipsa corrupti in ducimus aliquid incidunt
        illum nam odio officia maiores libero natus, quasi, architecto aut esse?
      </p>
      <p>
        Perspiciatis iste autem repellat eos? Ducimus reiciendis quaerat at ex,
        quo autem explicabo veniam rerum illum nostrum deserunt, quod cumque aut
        odio esse voluptates iste dolores suscipit. Beatae, sapiente unde.
      </p>
      <p>
        Corrupti officiis quidem maxime quas quasi placeat tempore error
        perferendis dolorem repudiandae qui sint nobis, eos, labore maiores?
        Soluta dolorem, dicta harum similique vitae magni cum inventore ratione
        ipsa id?
      </p>
      <p>
        Mollitia corrupti sint laboriosam officia voluptatum eius voluptates,
        libero tempore non, sit voluptatem aperiam minima illum. Aliquam
        deserunt, natus in nisi tempora, ex libero hic temporibus consectetur
        recusandae vel dolorum.
      </p>
    </div>
  );
};

export default App;
