import React from 'react'
import withData from 'apollo/hoc/withData'
import { Image } from 'semantic-ui-react'
import Layout from '../components/Layout/Layout'

const About = () => (
  <Layout title="О блоге">
    <h1>Архив путешествий. Третья от Солнца планета.</h1>
    <h3>О блоге</h3>
    <p>
      Этот блог ведется с целью хронологии моих путешествий по третьей от Солнца планете.
    </p>
    <p>
      Архивы фоторгафий и путевые заметки, с любовью к каждому пройденному километру и
      каждому прожитому моменту.
    </p>
    <Image
      shape="rounded"
      src="static/me.jpg"
      alt="Here I am, at the planet Earth"
      className="ui centered fluid image"
    />
    <h3>Об авторе</h3>
    <ul>
      <li>Автор - Лина</li>
      <li>Лина работает системным аналитиком в рабочее время.</li>
      <li>В свободное от работы время - Лина все время куда-то едет.</li>
      <li>Или бежит. Лина очень любит бегать на длинные дистанции, например.</li>
      <li>
        Учит языки. Например, сейчас, Лина амбициозно старается выучить французский, хотя
        картавить ей явно не дано.
      </li>
      <li>
        Пишет статьи, в которых странно шутит. Если вы хотите хороших умных шуток -
        скачайте{' '}
        <a href="http://xkcd.ru/1174/" target="_blank" rel="noopener noreferrer">
          полную версию нашего приложения, без рекламы и гмо
        </a>
      </li>
      <li>Делает и обрабатывает фотографии к этим статьям.</li>
      <li>
        С нетерпением ждет первого рейса{' '}
        <a
          href="https://ru.wikipedia.org/wiki/BFR_(%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%B0)"
          target="_blank"
          rel="noopener noreferrer"
        >
          BFR
        </a>, который подбросит её на четвертую планету от солнца.
      </li>
    </ul>
    <a
      href="https://www.instagram.com/li_oliin/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Жизнь в картинках
    </a>
    <br />
    <a
      href="https://www.facebook.com/lina.oleynik.1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Моя (анти)социальная жизнь
    </a>
    <br />
    <a
      href="https://www.linkedin.com/in/linaoliinyk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Я люблю свою работу (правда)
    </a>
    <br />
    <a
      href="https://www.strava.com/athletes/6249492"
      target="_blank"
      rel="noopener noreferrer"
    >
      Мои беговые будни
    </a>
  </Layout>
)

export default withData(About)
