
export class FindService {
     public card = {
        activity: "init",
        type: "init",
        participants: "init",
        price: "init",
        link: "init",
        key: "init",
        accessibility: "init"
    }

    async FindAdvice() {
        const URL = `https://www.boredapi.com/api/activity?participants=1`
        try {
            let res = await fetch(URL);
            let advice = await res.json();

                this.card.activity = advice.activity,
                this.card.type = advice.type,
                this.card.participants = advice.participants,
                this.card.price = advice.price,
                this.card.link = advice.link,
                this.card.key = advice.key,
                this.card.accessibility = advice.accessibility;
           

            return
        } catch (err) {
            console.log(err)
        }
    }

   async getCard() {
      await  this.FindAdvice()
        return this.card
    }

}