//bonus
const videos = [
    {title: 'First video', uploader: 'Kris', time: 200},
    {title: 'Second video', uploader: 'Mary', time: 30},
    {title: 'Third video', uploader: 'Jim', time: 60},
    {title: 'Fourth video', uploader: 'Jonatan', time: 120},
    {title: 'Fifth video', uploader: 'Anjie', time: 90}
]


class Video {
    constructor ({title, uploader, time}) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`);
    }
}


// const video1 = new Video('Stay Under the Earth', 'John', 90);
// video1.watch();
// const video2 = new Video('Family days', 'Emma', 160);
// video2.watch();

//bonus
videos.forEach(element => {
    const videoFromArr = new Video(element);
    videoFromArr.watch();
})


