import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Post = ({ id }) => {
  return (
    <Layout as="article" title="О нас">
      <header>
        <h2>Милан</h2>
        <h3>
          {id}
        </h3>
        <p>
          <small>
            <time dateTime="2017-06-20 19:00">2017-06-20 19:00</time> Андрей
            Лось
          </small>
        </p>
      </header>
      <PostContainer>
        <p>
          Милан был у нас пересадочным пунктом перед большим путешествием во
          Францию (большим, по грандиозности для нас, а не по времени пребывания
          там). Потому, мы провели в северной столице Италии один очень жаркий
          день, которым тут немного и поделимся.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/1.jpg" alt="Italy" />
        </p>
        <h2>Рубрика #ЧтоКакПочем</h2>
        <h3>Проживание в Милане</h3>
        <p>
          <img src="http://ololos.space/italy-milano/2.jpg" alt="Italy" />
        </p>
        <p>
          Нам попалась маленькая частная гостиница на сайте Booking.com,
          относительно недалеко от вокзала. Пол часа пешком, что, по меркам
          Милана, совсем рядом. К моему удивлению, хозяин заговорил с нами на
          русском, так что мне не пришлось даже пытаться выдавать свой испанский
          за итальянский в этой стране, где с учебой английского мало кто
          заморачивается. Если вам нужны контакты гостиницы - пишите, мы
          поделимся. К условиям мы особо привередливы не были, если что. На одну
          ночь, да ещё и так дёшево - она вполне себя оправдала.
        </p>
        <h3>Передвижение по городу</h3>
        <p>
          <img src="http://ololos.space/italy-milano/3.jpg" alt="Italy" />
        </p>
        <p>
          Хотели взять в аренду городские велосипеды. Но они показались нам не
          сильно экономически выгодны. Да и веловождение не выглядит там
          настолько привлекательным - инфраструктуры типа велосипедных дорожек
          особо не наблюдалось, дистанции там огромные, велосипедопрокат
          дорогой. Потому.. Мы ходили пешком :) А надо сказать, это мой любимый
          транспорт. Потому, пока были силы (а это где-то на 30 км блужданий по
          городу) - мы просто гуляли по нему. Изредка прибегая к услугам
          местного.. Метро. Система такая же, как и по всей Европе - покупаешь в
          автомате билет на время и зоны, перед тем, как заходить в транспорт -
          компостируешь его в доступном автомате (или, на крайняк, пишешь ручкой
          время, когда сел в него) Трамвайная сеть (она довольно-таки развита -
          17 линий). Воспользовались мы ею один раз - утром, от гостинницы до
          вокзала. Проехали бесплатно в древнем вагончике начала ХХ века. По
          заверениям сидящего рядом дедушки полиглота (который говорил с нами на
          немецком, французском, испанском и английском) - так и надо. Мы не
          поняли, то ли это в выходные по утрам бесплатно, то ли этот винтажный
          вагончик вообще всегда катает всех так бескорыстно.
        </p>
        <h3>Лайфхаки для посещения достопримечательностей</h3>
        <p>
          <img src="http://ololos.space/italy-milano/4.jpg" alt="Italy" />
        </p>
        <p>
          В собор Дуомо можно прям на месте взять билет онлайн. Так вы сможете
          сэкономить 2 часа стояния под солнцепеком в очереди за билетами. Вам
          достаточно будет только рапсечатать ваши билеты (для этого надо нагло
          подойти в самое начало очереди, и сказать пропускающему служащему, что
          у вас онлайн билет. Очередь на печать несравнимо меньше, потому вас,
          почти наверняка, сразу пропустят. В нашем случае - перед нами был
          всего 1 человек.
        </p>
        <h2>Рубрика иллюстрированного повествования</h2>
        <p>Первым делом мы потопали в место, где был хлеб.</p>
        <p>
          <img src="http://ololos.space/italy-milano/5.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/6.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/7.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/8.jpg" alt="Italy" />
        </p>
        <p>
          Хорошенько нафаршированные итальянским прошутто мы отправились за
          зрелищами.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/9.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/10.jpg" alt="Italy" />
        </p>
        <p>К замку Сфорцеско, например.</p>
        <p>
          <img src="http://ololos.space/italy-milano/11.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/12.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/13.jpg" alt="Italy" />
        </p>
        <p>
          Где-то вычитав, что в пятницу во второй половине дня все музеи там
          бесплатны и открыты к посещению, попробовали зайти в пару мест. Нас
          никуда не пустили, объясняя это чем-то на итальянском.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/14.jpg" alt="Italy" />
        </p>
        <p>
          Не сильно растроившись, мы проведали фонтан "Свадебный торт", который
          стоит прям возле входа в замок, и держали наш путь дальше.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/15.jpg" alt="Italy" />
        </p>
        <p>
          Следующим в списке беллетристических достопримечательностей Милана
          значился собор Дуомо. Он находится неподалеку, на одноименной площади
          Piazza del Duomo.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/16.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/17.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/20.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/21.jpg" alt="Italy" />
        </p>
        <p>
          Надо сказать, не зря там такая куча туристических тел на еденицу
          площади. Собор и действительно очень величественный и красивый.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/18.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/19.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/22.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/23.jpg" alt="Italy" />
        </p>
        <p>
          А виды, открывающиеся с крыши - стоят тех тысячи (или сколько их там?)
          ступенек вверх по винтовой лестнице.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/24.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/25.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/26.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/27.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/28.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/29.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/30.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/31.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/32.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/33.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/34.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/35.jpg" alt="Italy" />
        </p>
        <p>
          Справа от собора, на той же Пяцца дель Дуомо, расположена не менее
          туристически наполненная галерея Витторио Эмануэле. Старый красивенный
          пассаж с кучей бутиков, с неприличным количеством мишленовских
          ресторанов и семизвездочной гостинницей (не уверена, есть ли еще
          где-то такие, вообще).
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/36.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/37.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/38.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/39.jpg" alt="Italy" />
        </p>
        <p>Пафосный центр роскоши, в общем :)</p>
        <p>
          <img src="http://ololos.space/italy-milano/40.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/41.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/42.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/43.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/44.jpg" alt="Italy" />
        </p>
        <p>Нам понравилось.</p>
        <p>
          <img src="http://ololos.space/italy-milano/45.jpg" alt="Italy" />
        </p>
        <p>
          Выйдя из галереи наткнулись на улицу Via Filodrammatici c театром Ла
          Скала.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/45-1.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/45-2.jpg" alt="Italy" />
        </p>
        <p>
          На этом осознанная часть наших миланских похождений закончилась. Мы
          купили мороженка (оно тут вкусное, мой фаворит - лимонное), мы
          отправились бесцельно бродить от одной точки на карте до другой.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/46.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/47.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/48.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/49.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/50.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/51.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/52.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/53.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/54.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/55.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/56.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/57.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/58.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/59.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/60.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/61.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/62.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/63.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/64.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/65.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/66.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/67.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/67-0.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/67-1.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/67-2.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/67-3.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/68.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/69.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/70.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/71.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/72.jpg" alt="Italy" />
        </p>
        <p>Вышли к симпатичному каналу.</p>
        <p>
          <img src="http://ololos.space/italy-milano/73.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/74.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/75.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/76.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/77.jpg" alt="Italy" />
        </p>
        <p>
          Пытаясь сфотографировать весь этот идиллический залитый солнце/м
          вечер, я уронила зайца в воду (того, что на рюкзаке в профиль висит).
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/78.jpg" alt="Italy" />
        </p>
        <p>
          Наш вечер снова обрел цель в виде спасательной операции этого
          /пушистого свидетельства моей инфантильности. К слову, так как Андрей
          у мамы инженер, все обошлось.
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/79.jpg" alt="Italy" />
        </p>
        <p>Мы сфоткали канал, и закоулками попетляли до нашей гостинницы./</p>
        <p>
          <img src="http://ololos.space/italy-milano/80.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/81.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/82.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/83.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/84.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/85.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/86.jpg" alt="Italy" />
        </p>
        <p>
          <img src="http://ololos.space/italy-milano/87.jpg" alt="Italy" />
        </p>
        <p>
          Немного утомленные 30-ти километровой прогулкой и напряженной
          спасательной операцией, мы засели в нашем убежище, в ожидании
          завтрашнего поезда в Ниццу.
        </p>
      </PostContainer>
    </Layout>
  );
};

export default Post;

Post.getInitialProps = ({ query: { id } }) => {
  return { id };
};

const PostContainer = styled.div`
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
    margin-bottom: 1em;
  }
`;
