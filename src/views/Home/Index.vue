<template>
  <div class="home">
    <div class="home_content">
        <div class="home_content__inner">
            <div class="section_one">
              <MainNavTop></MainNavTop>
            </div>
            <div class="section_two">
              <Banner></Banner>
              <HotNews></HotNews>
            </div>
            <div class="section_three">
              <PythonCard></PythonCard>
              <VideoCard></VideoCard>
              <QuestionCard></QuestionCard>
              <BookCard></BookCard>
            </div>
            <div class="section_four">
              <ContentListCard></ContentListCard>
            </div>
            <div class="section_five">
              <PageContentEnd></PageContentEnd>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Home/Banner";
import MainNavTop from "@/components/Home/MainNavTop";
import HotNews from "@/components/Home/HotNews";
import PythonCard from "@/components/Home/PythonCard";
import VideoCard from "@/components/Home/VideoCard";
import QuestionCard from "@/components/Home/QuestionCard";
import BookCard from "@/components/Home/BookCard";
import ContentListCard from "@/components/Home/ContentListCard";
import PageContentEnd from "@/components/Home/PageContentEnd";
export default {
  name: "Home",
  methods:{

  },
  components:{
    Banner,
    MainNavTop,
    HotNews,
    PythonCard,
    VideoCard,
    QuestionCard,
    BookCard,
    ContentListCard,
    PageContentEnd
  }
}
</script>

<style lang="less" scoped>
.home{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  .home_content{
    min-height: 750px;
    width: 100%;
    display: flex;
    justify-content: center;
    .home_content__inner{
      width: 1300px;
      height: auto;
      min-height: 800px;
      display: flex;
      flex-direction: column;
      .section_one{
        width: 100%;
        height: auto;
      }
      .section_two{
        height: auto;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .section_three{
        margin-top: 12px;
        margin-bottom: 12px;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .section_four{
        margin-bottom: 15px;
      }
      .section_five{
        height: auto;
        margin-bottom: 20px;
      }
    }
  }

}
</style>
