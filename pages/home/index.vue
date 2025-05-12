<script setup lang="ts">
import InfoCard from '~/components/pages/home/InfoCard.vue';
import Card from 'primevue/card';
import TopUsersCard from '~/components/pages/home/TopUsersCard.vue';
import Calendar from 'primevue/calendar';
import EventItem from '~/components/pages/home/EventItem.vue';


definePageMeta({
  title: 'Welcome To Algorithmic.uz'
})

const staticInfos = [
  {
    title: 'All Users',
    icon: 'mdi:account',
    count: 1200,
    percentage: 20
  },
  {
    title: 'All Problems',
    icon: 'mdi:book-open-page-variant',
    count: 200,
    percentage: 10
  },
  {
    title: 'All Submissions',
    icon: 'mdi:file-document-edit-outline',
    count: 5000,
    percentage: 30
  }
]


const news = [
  {
    img: 'https://miro.medium.com/v2/resize:fit:1170/1*SgxIAn4x-bQ12eEQ-6fKCg.jpeg',
    title: 'Algorithmic.uz saytimiz ishga tushdi',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...',
  },

  {
    img: 'https://i.pinimg.com/originals/7f/d4/8c/7fd48c6f75bdf649e988e16343cd921c.png',
    title: 'Bizning jamoa bilan tanishing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...',
  },
  {
    img: 'https://i.pinimg.com/736x/f0/e2/2b/f0e22b126ad31f01c31505fa02121fb2.jpg',
    title: 'O`z kelajagingizni biz bilan boshlang',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...',
  }
]

const topUsers = [
  {
    title: 'Jhon Doe',
    image: 'https://cm.author.today/content/2023/05/08/6354076bbe8a40d2baacee2cca76cad0.jpg?height=750&width=750&rmode=max',
    subtitle: 'Student Of MIT',
    star: 2,
    rating: 444,
    level: 'first'
  },

  {
    title: 'Roy Hall',
    image: 'https://static.wikia.nocookie.net/9b0fab5e-202f-4b1d-af54-b50fea4185b1/scale-to-width/755',
    subtitle: 'Student Of MIT',
    star: 1,
    rating: 222,
    level: 'second'
  },

  {
    title: 'Theo Hart',
    image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65c8cc319bb1c5686a802b9d_65c8ccd95ea0e7737d5c3812/scale_1200',
    subtitle: 'Student Of MIT',
    star: 5,
    rating: 111,
    level: 'third'
  },
]

const date = ref();
</script>

<template>
  <div class="home">
    <div class="home__news">
      <div class="cards">
        <InfoCard
          v-for="info in staticInfos"
          :key="info.count"
          :title="info.title"
          :icon="info.icon"
          :count="info.count"
          :percentage="info.percentage"/>
      </div>

      <div class="news-card">
        <Card v-for="content in news" :key="content.title" class="mt-5">
          <template #content>
            <div class="news-card__image">
              <NuxtImg
                :src="content.img"
                class="w-2/4 h-[170px] object-cover rounded-xl"/>

              <div class="news-card__content">
                <h1 class="title">{{ content.title }}</h1>
                <p class="description">{{ content.description }}</p>

                <NuxtLink to="/" class="mt-2 text-primary text-end text-sm">
                  Read more ...
                </NuxtLink>
              </div>

            </div>
          </template>
        </Card>
      </div>
    </div>

    <aside class="home__top-users">
      <h1 class="title">Top 3 users</h1>
      <TopUsersCard
        v-for="(user, index) in topUsers"
        :key="user.rating + index"
        class="mt-3"
        :title="user.title"
        :user-image="user.image"
        :subtitle="user.subtitle"
        :star="user.star"
        :level="user.level"
        :rating="user.rating"/>

      <div class="pb-3 border-b">
        <Calendar v-model="date" selection-mode="multiple" class="mt-3" inline show-week/>
      </div>

    </aside>
  </div>
</template>

<style scoped lang="scss">
.home {
  @apply flex gap-[40px] justify-between;
  &__news {
    @apply flex-1;
    .cards {
      @apply grid grid-cols-3 gap-4;
    }

    .news-card {
      @apply mt-6 max-h-[70vh] pr-4  overflow-auto ;
      &__image {
        @apply flex justify-between gap-2;
      }

      &__content {
        @apply flex flex-col w-2/4;
        .title {
          @apply text-xl font-bold;
        }

        .description {
          @apply text-slate-400 text-sm;
        }
      }

      &::-webkit-scrollbar {
        width: 2px;
      }

      &::-webkit-scrollbar-thumb {
        @apply bg-slate-200;
      }

    }
  }

  &__top-users {
    @apply w-[350px];
    .title {
      @apply text-center text-base m-0 font-bold;
    }
  }
}


</style>
